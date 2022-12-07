export default {
    name: "users",
    title: "Users",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "address",
            title: "Address",
            type: "string",
        },
        {
            name: "contact",
            title: "Contact",
            type: "object",
            fields: [
                {
                    name: "email",
                    title: "Email",
                    type: "string",
                },
                {
                    name: "phone",
                    title: "Phone",
                    type: "string",
                },
                {
                    name: "discord",
                    title: "Discord",
                    type: "string",
                },
                {
                    name: "linkdin",
                    title: "LinkdIn",
                    type: "url",
                },
                {
                    name: "twitter",
                    title: "Twitter",
                    type: "url",
                },
                {
                    name: "instagram",
                    title: "Instagram",
                    type: "url",
                },
                {
                    name: "github",
                    title: "Github",
                    type: "url",
                },
                {
                    name: "geeksforgeek",
                    title: "Geeksforgeek",
                    type: "url",
                },
            ],
        },
        {
            name: "languages",
            title: "Languages",
            type: "array",
            of: [
                {
                    name: "language",
                    title: "Language",
                    type: "object",
                    fields: [
                        {
                            name: "languageName",
                            title: "Language Name",
                            type: "string",
                        },
                        {
                            name: "percentage",
                            title: "Percentage",
                            type: "number",
                        },
                    ],
                },
            ],
        },
        {
            name: "technicalSkills",
            title: "Technical Skills",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
        },
        {
            name: "skills",
            title: "Skills",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
        },
        {
            name: "tools",
            title: "Tools",
            type: "object",
            fields: [
                {
                    name: "ideas",
                    title: "IDEA'S",
                    type: "array",
                    of: [
                        {
                            type: "string",
                        },
                    ],
                },
                {
                    name: "frameworks_frontendtools",
                    title: "Frameworks & Tools",
                    type: "array",
                    of: [
                        {
                            type: "string",
                        },
                    ],
                },
                {
                    name: "apiTestingSoftware",
                    title: "API Testing Softwares",
                    type: "array",
                    of: [
                        {
                            type: "string",
                        },
                    ],
                },
                {
                    name: "hosting",
                    title: "Hosting Platforms",
                    type: "array",
                    of: [
                        {
                            type: "string",
                        },
                    ],
                },
            ],
        },
        {
            name: "educations",
            title: "Educations",
            type: "array",
            of: [
                {
                    name: "education",
                    title: "Education",
                    type: "object",
                    fields: [
                        {
                            name: "collegeName_schoolName",
                            title: "College / School Name",
                            type: "string",
                        },
                        {
                            name: "city",
                            title: "City",
                            type: "string",
                        },
                        {
                            name: "degree",
                            title: "Degree",
                            type: "string",
                        },
                        {
                            name: "field",
                            title: "Field of study",
                            type: "string",
                        },
                        {
                            name: "passing",
                            title: "Passing",
                            type: "date",
                            options: {
                                dateFormat: "MM-YYYY",
                            },
                        },
                        {
                            name: "score",
                            title: "CGPA / Percentage",
                            type: "number",
                            validation: (Rule) =>
                                Rule.max(100)
                                    .min(1)
                                    .warning(
                                        "Taken value must be between 1 to 100"
                                    ),
                        },
                    ],
                },
            ],
        },
        {
            name: "intrests",
            title: "Intrests",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
        },
        {
            name: "hobbies",
            title: "Hobbies",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
        },
    ],
};

// https://auth.geeksforgeeks.org/user/rupenjarsaniya/
