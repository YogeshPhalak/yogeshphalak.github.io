// src/components/ui/PhotoGallery.jsx

import React, {useState} from 'react';

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Import the plugins you want to use
import Download from "yet-another-react-lightbox/plugins/download";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const PhotoGallery = ({photos}) => {
    const [index, setIndex] = useState(-1);

    return (
        <>
            <PhotoAlbum
                photos={photos}
                layout="masonry"
                onClick={({index: current}) => setIndex(current)}
                columns={(containerWidth) => {
                    if (containerWidth < 400) return 1;
                    if (containerWidth < 800) return 2;
                    return 3;
                }}
            />

            <Lightbox
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={photos}
                index={index}
                plugins={[Download, Thumbnails]}
                download={{
                    download: ({slide}) => {
                        const baseName = slide.src.split('/').pop().split('.').shift();
                        // You can customize the downloaded filename here
                        return `${baseName}_by_Yogesh_Phalak.jpg`;
                    }
                }}
            />
        </>
    );
};

export default PhotoGallery;