import { User } from '../../ts/types/User';

/** Generate random password  */
export const  generatePswd = () => {
    var randomPsw = Math.random().toString(36).slice(-8);
    return randomPsw;
}
/**
 *  Define dataset users with valid/invalid values for tests
 * 
*/
export const valid_users : User[] =  [
    {   name: "Peter P",
        bio_desc: "I am PP",
        email: "peter_02@gmail.com",
        password: generatePswd()
    },
    {   name: "Mary",
        bio_desc: "I am Mary",
        email: "mary01@hotmail.com",
        password: generatePswd()
    },
    {   name: "Mr James",
        bio_desc: "I like to drawn",
        email: "mr_james@gmail.com",
        password: generatePswd()
    },
    {   name: "Jess",
        bio_desc: "",
        email: "jess17@gmail.com",
        password: generatePswd()
    }
];

export const invalid_name : User[] =  [
    {   name: "",
        bio_desc: "I like to drawn",
        email: "peter_02@gmail.com",
        password: generatePswd()
    },
    {   name: " ",
        bio_desc: "I like to drawn",
        email: "mr_james@gmail.com",
        password: generatePswd()
    },
    {   name: "-",
        bio_desc: "I am Mary",
        email: "mary_22@hotmail.com",
        password: generatePswd()
    },
]

export const invalid_email : User[] =  [
    {   name: "Mary",
        bio_desc: "I am Mary",
        email: "",
        password: generatePswd()
    },
    {   name: "Mary J",
        bio_desc: "I am MJ",
        email: "-",
        password: generatePswd()
    },
    {   name: "Peter",
        bio_desc: "Peter P.",
        email: "peter@us+com+",
        password: generatePswd()
    },
    {   name: "Mike",
        bio_desc: "",
        email: "mike",
        password: generatePswd()
    },
    {   name: "Mr James",
        bio_desc: "I like to drawn",
        email: "mr_james@==gmail",
        password: generatePswd()
    },
    {   name: "Jess",
        bio_desc: "",
        email: "jess-@gmail/com",
        password: generatePswd()
    }
];