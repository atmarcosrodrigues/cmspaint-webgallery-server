import { Category } from '../../ts/types/Category';

/**
 *  Define dataset Categores with valid/invalid values for tests
 * 
*/
export const valid_categories : Category[] =  [
    {   name: "Anime",
        desc: "Japanese Art",
    },
    {   name: "Cartoon",
        desc: "Illustrations basead on animated characters, in an unrealistic or semi-realistic style.",
    },
    {   name: "Geometric",
        desc: "Geometric forms and vectors",
    },
    {   name: "Sci Fi",
        desc: "Science fiction, a genre of fiction literature whose content is imaginative, but based in science.",
    },
    {   name: "Colors",
        desc: "Colors Images",
    },
];

export const invalid_empty_names : Category[] =  [
    {   name: "",
        desc: "Japanese Art",
    },
    {   name: " ",
        desc: "Illustrations basead on animated characters, in an unrealistic or semi-realistic style.",
    },
    {   name: "     ",
        desc: "Geometric forms and vectors",
    }
];
export const invalid_names : Category[] =  [
    {   name: "#",
        desc: "Japanese Art",
    },
    {   name: "/",
        desc: "Illustrations basead on animated characters, in an unrealistic or semi-realistic style.",
    },
    {   name: "  --  ",
        desc: "Geometric forms and vectors",
    },
    {   name: "@",
        desc: "Science fiction, a genre of fiction literature whose content is imaginative, but based in science.",
    },
    {   name: "123",
        desc: "Colors Images",
    },
    {   name: "1#",
        desc: "Japanese Art",
    },
    {   name: "#@@@",
        desc: "Illustrations basead on animated characters, in an unrealistic or semi-realistic style.",
    },
    {   name: "%&",
        desc: "Geometric forms and vectors",
    },
    {   name: "//",
        desc: "Science fiction, a genre of fiction literature whose content is imaginative, but based in science.",
    },
    {   name: "_8567453_",
        desc: "Colors Images",
    },
    {   name: "542353425231234",
        desc: "Japanese Art",
    },
];