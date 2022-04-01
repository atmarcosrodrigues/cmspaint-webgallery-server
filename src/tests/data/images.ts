import { Image } from '../../ts/types/Image';
/**
 *  Define dataset Images with valid/invalid values for tests
 * 
*/
export const invalid_title : Image[] =  [
    {
        title: "",
        data: "",
        user_author_id: "",
        category_id: ""
    },
    {
        title: "  ",
        data: "",
        user_author_id: "",
        category_id: ""
    },
    {
        title: " -- ",
        data: "",
        user_author_id: "",
        category_id: ""
    },
    {
        title: " ## ",
        data: "",
        user_author_id: "",
        category_id: ""
    }
];
export const invalid_uuid : Image[] =  [
    {
        title: "Image Title",
        data: "",
        user_author_id: "invalid-format-id",
        category_id: ""
    },
    {
        title: "My art",
        data: "",
        user_author_id: "404958d0-cdsfds8983",
        category_id: ""
    },
    {
        title: "Drawn",
        data: "",
        user_author_id: "",
        category_id: ""
    },
    {
        title: "Image 01",
        data: "",
        user_author_id: "49b0f6bb-f280-467a-b00c-0214ec477de3",
        category_id: ""
    }
];