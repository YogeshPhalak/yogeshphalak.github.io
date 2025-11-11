// file: src/blog-content/reduced-bar-hinge-model.jsx
import React from 'react';
import {CodeBlock} from '../utils/CodeBlock';
import {Math} from '../utils/Math';

export const content = (
    <>
        <div className="lead-paragraph">
            <p>
                Origami and Kirigami structures have unique mechanical properties that make them valuable for
                engineering applications—from deployable space structures to soft robotics. But simulating their
                complex folding dynamics is computationally expensive. The <strong>Reduced Bar-Hinge Model</strong>
                offers an elegant solution: abstract the continuous geometry into a network of spring-like elements
                that can be simulated efficiently.
            </p>
            <p>
                In this post, I'll walk you through implementing this physics-based simulation in Python. I'll cover
                the theoretical framework, show you how to leverage Numba for 10x speedup with parallel computing,
                and demonstrate the complete workflow from geometry definition to animated visualization.
            </p>
        </div>

        <div style={{
            margin: '2rem 0',
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(6, 182, 212, 0.1))',
            borderRadius: '1rem',
            border: '2px solid rgba(147, 51, 234, 0.2)',
            textAlign: 'center'
        }}>

            <img
                src="/images/projects/image22.gif"
                alt="Description"
                style={{
                    width: '100%',
                    maxWidth: '800px',
                    borderRadius: '1rem',
                    margin: '2rem auto',
                    display: 'block',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
            />
            <p style={{fontStyle: 'italic', margin: 0}}>
                Origami sheet folding simulation with real-time strain visualization
            </p>
        </div>

        <h2 id="why-bar-hinge">Why the Bar-Hinge Model?</h2>

        <p>
            Traditional finite element methods for thin-sheet structures are accurate but slow. The Bar-Hinge Model
            strikes a balance: it's simple enough to simulate in real-time, yet captures the essential physics of
            folding, bending, and stretching.
        </p>

        <div className="tech-stack-grid">
            <div className="tech-item">
                <h4>⚡ Fast Computation</h4>
                <p>
                    10x speedup with Numba parallelization makes real-time simulation possible.
                </p>
            </div>
            <div className="tech-item">
                <h4>🎯 Physically Accurate</h4>
                <p>
                    Captures axial, bending, and damping forces with tunable stiffness parameters.
                </p>
            </div>
            <div className="tech-item">
                <h4>🔧 Easy to Extend</h4>
                <p>
                    Modular design allows for custom geometries, materials, and boundary conditions.
                </p>
            </div>
            <div className="tech-item">
                <h4>📊 Rich Visualization</h4>
                <p>
                    Real-time 3D animation with VPython showing strain distribution and dynamics.
                </p>
            </div>
        </div>

        <h2 id="theory">The Physics: How It Works</h2>

        <p>
            The Bar-Hinge Model discretizes origami geometry into <strong>nodes</strong> (vertices) connected by
            two types of elements:
        </p>

        {/* TODO: Add diagram showing bars and hinges on origami structure */}
        <div style={{
            margin: '2rem 0',
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(6, 182, 212, 0.1))',
            borderRadius: '1rem',
            border: '2px solid rgba(147, 51, 234, 0.2)',
            textAlign: 'center'
        }}>
            <img
                src="/images/projects/image98.png"
                alt="Description"
                style={{
                    width: '100%',
                    maxWidth: '800px',
                    borderRadius: '1rem',
                    margin: '2rem auto',
                    display: 'block',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
            />
            <p style={{fontStyle: 'italic', margin: 0}}>
                Bar-Hinge model formulation
            </p>
        </div>

        <div className="highlight-box">
            <h4>🔵 Bars</h4>
            <p>
                Represent edges and diagonals. Modeled as <strong>linear springs</strong> with axial stiffness
                <code>k_axial</code> that resist stretching and compression.
            </p>
            <h4 style={{marginTop: '1.5rem'}}>🔴 Hinges</h4>
            <p>
                Represent folds and face bending. Modeled as <strong>torsional springs</strong> with stiffness
                <code>k_fold</code> (creases) and <code>k_facet</code> (faces) that resist angular changes.
            </p>
        </div>

        <h3 id="governing-equations">Governing Equations</h3>

        <p>
            For each node, Newton's second law gives us the equation of motion:
        </p>

        <Math display={true}>
            {`\\frac{d^2 P_i}{dt^2} = \\frac{1}{m_i} \\left( \\vec{F}_i^{\\text{external}} + \\vec{F}_i^{\\text{axial}} + \\vec{F}_i^{\\text{crease}} + \\vec{F}_i^{\\text{damping}} \\right)`}
        </Math>

        <p><strong>Axial Force</strong> (bar stretching/compression):</p>
        <Math display={true}>
            {`F_i^{\\text{axial}} = -k_{\\text{axial}} \\sum_{j \\in \\text{Neighbours}} (l_{ij} - l_{ij}^0) \\frac{\\partial l}{\\partial P_j}`}
        </Math>

        <p><strong>Crease Force</strong> (fold angle restoration):</p>
        <Math display={true}>
            {`F_{\\text{crease}} = -k_{\\text{crease}} (\\theta - \\theta_{\\text{target}}) \\frac{\\partial \\theta}{\\partial p}`}
        </Math>

        <p><strong>Damping Force</strong> (energy dissipation):</p>
        <Math display={true}>
            {`F_i^{\\text{damping}} = -2\\zeta \\sqrt{m_i k_{\\text{axial}}} \\sum_{j \\in \\text{Neighbours}} \\left( \\frac{dP_i}{dt} - \\frac{dP_j}{dt} \\right)`}
        </Math>

        <blockquote>
            <p>
                <strong>Key Insight:</strong> By reducing continuous geometry to discrete springs, we transform
                a complex PDE problem into coupled ODEs that can be solved with standard numerical integrators.
            </p>
        </blockquote>

        <h2 id="implementation">Implementation: Three-Step Workflow</h2>

        <p>
            The implementation consists of three main components: geometry definition, dynamic simulation, and
            visualization. Let's look at each.
        </p>

        <h3 id="step1-geometry">Step 1: Define Geometry</h3>

        <p>
            The <code>BaseGeometry</code> class creates the node grid and automatically generates bars and hinges.
            Here's the core structure:
        </p>

        <CodeBlock
            language="python"
            code={`import numpy as np
import vpython as vp

class BaseGeometry:
    def __init__(self, a, b, xn, yn, visualize=True):
        """
        Create a rectangular sheet geometry.
        
        Args:
            a, b: Grid spacing in x and y directions
            xn, yn: Number of nodes in x and y directions
            visualize: Whether to create VPython visualization
        """
        self.a = a  # x-spacing
        self.b = b  # y-spacing
        self.xn = xn  # nodes in x
        self.yn = yn  # nodes in y
        self.i_max = xn
        self.j_max = yn
        
        # Initialize node positions
        self.nodes = np.zeros((self.i_max, self.j_max, 3))
        self.bars = []
        self.hinges = []
        
        # Create the geometry
        self.update_nodes()
        self.add_bar_hinges()
        
        if visualize:
            self.init_scene()
            self.draw()`}
        />

        <p>
            Node positions are initialized in a regular grid:
        </p>

        <CodeBlock
            language="python"
            code={`def update_nodes(self):
    """Generate node positions in a grid."""
    for i in range(self.i_max):
        for j in range(self.j_max):
            self.nodes[i, j] = np.array([i * self.a, j * self.b, 0])`}
        />

        <p>
            Bars and hinges are automatically generated to connect neighboring nodes:
        </p>

        <CodeBlock
            language="python"
            code={`def add_bar_hinges(self):
    # Edge bars (boundaries)
    for i in range(self.i_max - 1):
        l0 = np.linalg.norm(self.nodes[i, 0] - self.nodes[i + 1, 0])
        self.add_bar([i, 0], [i + 1, 0], l0)
    
    # Diagonal bars (facets)
    for i in range(self.i_max - 1):
        for j in range(self.j_max - 1):
            l0 = np.linalg.norm(self.nodes[i, j] - self.nodes[i + 1, j + 1])
            self.add_bar([i, j], [i + 1, j + 1], l0)
    
    # Horizontal and vertical bars (folds)
    for i in range(self.i_max - 1):
        for j in range(1, self.j_max - 1):
            l0 = np.linalg.norm(self.nodes[i, j] - self.nodes[i + 1, j])
            self.add_bar([i, j], [i + 1, j], l0)`}
        />

        <p>
            Create a simple geometry:
        </p>

        <CodeBlock
            language="python"
            code={`# Create a 4x6 grid with spacing 0.9 x 0.5
geom = BaseGeometry(a=0.9, b=0.5, xn=4, yn=6, visualize=True)`}
        />

        <div style={{
            margin: '2rem 0',
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(6, 182, 212, 0.1))',
            borderRadius: '1rem',
            border: '2px solid rgba(147, 51, 234, 0.2)',
            textAlign: 'center'
        }}>
            <img
                src="/images/projects/image34.gif"
                alt="Description"
                style={{
                    width: '100%',
                    maxWidth: '800px',
                    borderRadius: '1rem',
                    margin: '2rem auto',
                    display: 'block',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
            />
            <p style={{fontStyle: 'italic', margin: 0}}>
                Base geometry: 4×6 node grid with bars and triangular facets
            </p>
        </div>

        <h3 id="step2-simulation">Step 2: Dynamic Simulation</h3>

        <p>
            The simulation solver uses <code>scipy.integrate.solve_ivp</code> with Numba-optimized force calculations.
            Here's the heart of the solver:
        </p>

        <CodeBlock
            language="python"
            code={`from scipy.integrate import solve_ivp
from numba import jit, prange

def bar_hinge_model(t, x):
    """
    Compute derivatives for ODE solver.
    
    Args:
        t: Current time
        x: State vector [positions, velocities]
    
    Returns:
        dx_dt: Derivative vector [velocities, accelerations]
    """
    initialize_forces()
    
    # Reshape state into positions and velocities
    nodes = x[:i_max * j_max * 3].reshape((i_max, j_max, 3))
    vel = x[i_max * j_max * 3:].reshape((i_max, j_max, 3))
    
    # Calculate all forces (these run in parallel via Numba)
    calculate_external_force(nodes, vel, t)
    calculate_crease_force(nodes, vel, t)
    calculate_axial_force(nodes, vel, t)
    
    # Newton's second law: a = F/m
    acc = (force_external + force_axial + force_crease + force_damping) / mass
    
    # Pack derivatives: dx/dt = [velocity, acceleration]
    dx_dt = np.zeros(i_max * j_max * 6)
    dx_dt[:i_max * j_max * 3] = vel.reshape(i_max * j_max * 3)
    dx_dt[i_max * j_max * 3:] = acc.reshape(i_max * j_max * 3)
    
    return dx_dt`}
        />

        <h4 id="numba-optimization">Numba Parallelization</h4>

        <p>
            Force calculations are the bottleneck. Since each node's force depends only on its neighbors, we can
            parallelize with Numba's <code>@jit(parallel=True)</code>:
        </p>

        <CodeBlock
            language="python"
            code={`@jit(parallel=True, cache=True, fastmath=True)
def calculate_axial_force(nodes, vel, t):
    """Calculate axial forces on all bars in parallel."""
    global k_axial, bars, force_axial, force_damping
    
    for i in prange(len(bars)):  # Parallel loop
        [p0, p1, l0] = bars[i]
        
        # Current bar vector and length
        n = nodes[p1[0]][p1[1]] - nodes[p0[0]][p0[1]]
        l_cr = np.linalg.norm(n)
        n = n / l_cr
        
        # Spring force: F = k * strain
        strain = (l_cr - l0) / l0
        f_spring = k_axial * strain * n
        
        # Damping: c * relative_velocity
        c = 2 * zeta * np.sqrt(k_axial * l0)
        f_damp = c * (vel[p1[0]][p1[1]] - vel[p0[0]][p0[1]])
        
        # Apply forces to both nodes
        if not node_props[p0[0]][p0[1]][1]:  # Not fixed
            force_axial[p0[0]][p0[1]] += f_spring
            force_damping[p0[0]][p0[1]] += f_damp
        
        if not node_props[p1[0]][p1[1]][1]:
            force_axial[p1[0]][p1[1]] -= f_spring
            force_damping[p1[0]][p1[1]] -= f_damp`}
        />

        <div className="highlight-box">
            <h4>⚡ Performance Impact</h4>
            <p>
                The <code>prange</code> function distributes loop iterations across CPU cores. For a 10×10 grid,
                this reduces simulation time from ~5 minutes to ~30 seconds—a <strong>10x speedup</strong>!
            </p>
        </div>

        <p>
            Running the simulation:
        </p>

        <CodeBlock
            language="python"
            code={`def get_solution(geom, filename='simulation.pkl', 
                 zeta=0.01, k_axial=20.0, k_facet=0.75, 
                 k_fold=0.8, dt=0.01, t_max=20.0):
    """
    Solve the equations of motion.
    
    Args:
        geom: Geometry object
        filename: Output file for results
        zeta: Damping ratio
        k_axial: Axial stiffness
        k_facet: Face bending stiffness
        k_fold: Fold stiffness
        dt: Time step
        t_max: Total simulation time
    """
    # Set up initial conditions
    nodes0 = geom.nodes
    vel0 = np.zeros_like(nodes0)
    x0 = np.hstack([nodes0.flatten(), vel0.flatten()])
    
    # Time points
    t_sim = np.linspace(0, t_max, int(t_max / dt) + 1)
    
    # Solve ODEs
    solution = solve_ivp(
        fun=bar_hinge_model,
        t_span=(0, t_max),
        y0=x0,
        method='RK23',
        t_eval=t_sim
    )
    
    # Save results
    with open(filename, 'wb') as f:
        pickle.dump(solution, f)
    
    return solution`}
        />

        <h3 id="step3-visualization">Step 3: Animated Visualization</h3>

        <p>
            The animator loads simulation results and plays them back in 3D with VPython. It includes real-time
            strain visualization:
        </p>

        <CodeBlock
            language="python"
            code={`import vpython as vp
import matplotlib.pyplot as plt

def simulate(geom, solution):
    """
    Animate simulation results with VPython.
    
    Args:
        geom: Geometry object with VPython scene
        solution: Solution object from solve_ivp
    """
    i_max, j_max = geom.i_max, geom.j_max
    
    # Add controls
    pause_button = vp.button(text='Pause', bind=pause_func)
    strain_checkbox = vp.checkbox(text='Show Strain')
    time_slider = vp.slider(min=0, max=solution.t[-1])
    
    # Animation loop
    for t_idx, t in enumerate(solution.t):
        # Extract node positions at this timestep
        y = solution.y[:, t_idx]
        geom.nodes = y[:i_max * j_max * 3].reshape((i_max, j_max, 3))
        
        if strain_checkbox.checked:
            # Calculate strain at each node
            colors = calculate_strain_colors(geom)
            geom.update_vp_nodes(colors=colors)
        else:
            geom.update_vp_nodes()
        
        time_slider.value = t
        vp.rate(1 / dt)  # Control playback speed`}
        />

        <p>
            Strain visualization colors nodes based on local deformation:
        </p>

        <CodeBlock
            language="python"
            code={`def calculate_strain_colors(geom):
    """Compute strain at each node and map to colors."""
    strains = np.zeros((geom.i_max, geom.j_max))
    
    for bar in geom.bars:
        [p0, p1, l0] = bar
        # Current length
        l_current = np.linalg.norm(
            geom.nodes[p0[0], p0[1]] - geom.nodes[p1[0], p1[1]]
        )
        # Strain magnitude
        strain = abs(l_current / l0 - 1)
        
        # Accumulate at nodes
        strains[p0[0], p0[1]] += strain
        strains[p1[0], p1[1]] += strain
    
    # Map to colors using matplotlib colormap
    cmap = plt.get_cmap('jet')
    colors = [[vp.vector(*cmap(s)[:3]) for s in row] for row in strains]
    
    return colors`}
        />

        <div style={{
            margin: '2rem 0',
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(6, 182, 212, 0.1))',
            borderRadius: '1rem',
            border: '2px solid rgba(147, 51, 234, 0.2)',
            textAlign: 'center'
        }}>
            <img
                src="/images/projects/image87.gif"
                alt="Description"
                style={{
                    width: '100%',
                    maxWidth: '800px',
                    borderRadius: '1rem',
                    margin: '2rem auto',
                    display: 'block',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
            />
            <p style={{fontStyle: 'italic', margin: 0}}>
                Real-time animation with strain visualization (blue = low strain, red = high strain)
            </p>
        </div>

        <h2 id="complete-example">Complete Example</h2>

        <p>
            Putting it all together—from geometry to animated results:
        </p>

        <CodeBlock
            language="python"
            code={`from src.geometries.base_geom import BaseGeometry
from src.bar_hinge_model import get_solution
from src.animator import simulate
import pickle

# Step 1: Create geometry
geom = BaseGeometry(
    a=0.9,        # x-spacing
    b=0.5,        # y-spacing  
    xn=4,         # nodes in x
    yn=6,         # nodes in y
    visualize=True
)

# Step 2: Run simulation
solution = get_solution(
    geom=geom,
    filename='my_simulation.pkl',
    zeta=0.01,      # Damping ratio
    k_axial=20.0,   # Axial stiffness
    k_facet=0.75,   # Face stiffness
    k_fold=0.8,     # Fold stiffness
    dt=0.01,        # Time step (seconds)
    t_max=20.0      # Total time (seconds)
)

# Step 3: Visualize results
with open('my_simulation.pkl', 'rb') as f:
    solution = pickle.load(f)

simulate(geom, solution)`}
        />

        <div className="highlight-box">
            <h4>💡 Tuning Parameters</h4>
            <p>
                <strong>Higher k_axial:</strong> Stiffer material, less stretching<br/>
                <strong>Lower zeta:</strong> Less damping, more oscillation<br/>
                <strong>Smaller dt:</strong> More accurate but slower simulation
            </p>
            <p style={{marginTop: '1rem'}}>
                Start with these defaults and adjust based on your material properties.
            </p>
        </div>

        <h2 id="applications">Applications</h2>

        <p>
            This simulation framework is versatile and has been used for:
        </p>

        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1rem',
            margin: '2rem 0'
        }}>
            <div style={{
                padding: '1.5rem',
                background: 'rgba(147, 51, 234, 0.05)',
                borderRadius: '0.75rem',
                border: '1px solid rgba(147, 51, 234, 0.2)'
            }}>
                <h4>🛰️ Deployable Structures</h4>
                <p style={{fontSize: '0.9rem', margin: '0.5rem 0 0 0'}}>
                    Test folding sequences for space solar panels and antenna arrays before physical prototyping.
                </p>
            </div>
            <div style={{
                padding: '1.5rem',
                background: 'rgba(6, 182, 212, 0.05)',
                borderRadius: '0.75rem',
                border: '1px solid rgba(6, 182, 212, 0.2)'
            }}>
                <h4>🤖 Soft Robotics</h4>
                <p style={{fontSize: '0.9rem', margin: '0.5rem 0 0 0'}}>
                    Design compliant mechanisms and adaptive grippers with origami-inspired actuation.
                </p>
            </div>
            <div style={{
                padding: '1.5rem',
                background: 'rgba(147, 51, 234, 0.05)',
                borderRadius: '0.75rem',
                border: '1px solid rgba(147, 51, 234, 0.2)'
            }}>
                <h4>🏗️ Metamaterials</h4>
                <p style={{fontSize: '0.9rem', margin: '0.5rem 0 0 0'}}>
                    Explore programmable stiffness and auxetic properties in kirigami patterns.
                </p>
            </div>
            <div style={{
                padding: '1.5rem',
                background: 'rgba(6, 182, 212, 0.05)',
                borderRadius: '0.75rem',
                border: '1px solid rgba(6, 182, 212, 0.2)'
            }}>
                <h4>💻 Physical Computing</h4>
                <p style={{fontSize: '0.9rem', margin: '0.5rem 0 0 0'}}>
                    Study nonlinear dynamics for reservoir computing and mechanical information processing.
                </p>
            </div>
        </div>

        <h2 id="extending">Extending the Model</h2>

        <p>
            The modular design makes it easy to customize for different applications:
        </p>

        <h3 id="custom-geometries">Custom Geometries</h3>

        <p>
            Inherit from <code>BaseGeometry</code> to create origami patterns:
        </p>

        <CodeBlock
            language="python"
            code={`class MiuraOriGeometry(BaseGeometry):
    def __init__(self, a, b, theta, xn, yn):
        """Miura-Ori tessellation pattern."""
        self.theta = theta  # Fold angle
        super().__init__(a, b, xn, yn)
    
    def update_nodes(self):
        """Override to create Miura-Ori pattern."""
        for i in range(self.i_max):
            for j in range(self.j_max):
                x = i * self.a
                y = j * self.b
                # Alternating height based on pattern
                z = self.a * np.cos(self.theta) if (i + j) % 2 == 0 else 0
                self.nodes[i, j] = np.array([x, y, z])`}
        />

        <h3 id="boundary-conditions">Boundary Conditions</h3>

        <p>
            Fix nodes or apply external forces:
        </p>

        <CodeBlock
            language="python"
            code={`def update_node_properties():
    """Set node masses and boundary conditions."""
    for i in range(i_max):
        for j in range(j_max):
            # Random mass variation
            node_props[i][j][0] = 0.01 + 0.05 * np.random.rand()
            
            # Fix left edge
            if i == 0:
                node_props[i][j][1] = True

@jit(parallel=True)
def calculate_external_force(nodes, vel, t):
    """Apply gravity and input forces."""
    for i in prange(i_max):
        for j in prange(j_max):
            if not node_props[i][j][1]:  # Not fixed
                # Gravity in x-direction
                force_external[i][j] = np.array([
                    -node_props[i][j][0] * 9.81, 0, 0
                ])`}
        />

        <h2 id="extensibility"> Beyond Origami</h2>

        <p>
            The core bar and hinge formulation can be adapted to simulate the dynamics of a variety of systems that rely
            on kinematic constraints and coupled deformation, including <strong>kirigami structures</strong> (origami
            with cuts), <strong>composite materials</strong>, and other <strong>architected meta-materials</strong>.
            This approach provides an efficient and scalable method for modeling complex structures. For
            systems requiring higher fidelity, the model can be combined with advanced formulations
            like the <strong>Absolute Nodal Coordinate Formulation (ANCF)</strong>.
        </p>
        <div style={{
            margin: '2rem 0',
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(6, 182, 212, 0.1))',
            borderRadius: '1rem',
            border: '2px solid rgba(147, 51, 234, 0.2)',
            textAlign: 'center'
        }}>
            <img
                src="/images/projects/image88.png"
                alt="Description"
                style={{
                    width: '100%',
                    maxWidth: '900px',
                    borderRadius: '1rem',
                    margin: '2rem auto',
                    display: 'block',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
            />
            <p style={{fontStyle: 'italic', margin: 0}}>
                Versetile applications of the Reduced Bar-Hinge Model beyond origami
            </p>
        </div>

        <h2 id="repository">Get the Code</h2>

        <p>
            The complete implementation with examples is available on GitHub:
        </p>

        <div className="cta-box">
            <h3>📦 Open Source Repository</h3>
            <p>
                Includes all source code, example geometries (Miura-Ori, Waterbomb, etc.), Jupyter notebooks,
                and detailed documentation.
            </p>
            <p style={{marginTop: '1.5rem'}}>
                <a
                    href="https://github.com/yourusername/origami-bar-hinge-model"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1.5rem',
                        background: 'white',
                        color: '#7c3aed',
                        borderRadius: '9999px',
                        textDecoration: 'none',
                        fontWeight: 600
                    }}
                >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                </a>
            </p>
            <p style={{marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8}}>
                ⭐ Star the repo if you find it useful!
            </p>
        </div>

        <h2 id="references">References</h2>

        <div style={{
            padding: '1.5rem',
            background: 'rgba(147, 51, 234, 0.05)',
            borderRadius: '0.75rem',
            margin: '1.5rem 0',
            fontSize: '0.95rem'
        }}>
            <p style={{margin: '0 0 1rem 0'}}>
                <strong>1. Ghassaei, A., et al. (2018).</strong> "Fast, Interactive Origami Simulation using GPU
                Computation." <em>Origami 7: OSME Proceedings</em>.
            </p>

            <p style={{margin: '0 0 1rem 0'}}>
                <strong>1. Tao, J., Eldeeb, A. E., & Li, S. (2023).</strong> "High-fidelity modeling of dynamic origami
                folding using Absolute Nodal Coordinate Formulation (ANCF)." <em>Mechanics Research Communications</em>,
                129, 104089.
            </p>
            <p style={{margin: '0 0 1rem 0'}}>
                <strong>2. Filipov, E. T., et al. (2017).</strong> "Bar and hinge models for scalable analysis of
                origami." <em>International Journal of Solids and Structures</em>, 124, 26–45.
            </p>

        </div>

        <h2 id="conclusion">Wrapping Up</h2>

        <p>
            The Reduced Bar-Hinge Model provides a practical way to simulate origami dynamics efficiently.
            With <strong>10x speedup from Numba parallelization</strong>, you can iterate designs rapidly,
            explore parameter spaces, and validate concepts before physical prototyping.
        </p>

        <blockquote>
            <p>
                "Fast simulation enables rapid design iteration. Build it, break it, learn from it—all in software
                before cutting your first sheet."
            </p>
        </blockquote>

        <p>
            Clone the repo, run the examples, and start exploring origami dynamics. I'd love to see what patterns
            you create! 🎨📐
        </p>

        <div style={{
            marginTop: '3rem',
            padding: '1.5rem',
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(6, 182, 212, 0.1))',
            borderRadius: '0.75rem',
            textAlign: 'center',
            fontSize: '0.95rem'
        }}>
            <p style={{margin: 0}}>
                <strong>Questions or ideas?</strong> Open an issue on GitHub or reach out. Happy folding! 🚀
            </p>
        </div>
    </>
);