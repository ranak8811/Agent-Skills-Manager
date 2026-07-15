export type Skill = {
    id: number;
    name: string;
    category: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}

export const SKILLS: Skill[] = [
    {
        id: 1,
        name: "Web Development",
        category: "Technical",
        description: "Development of websites and web applications.",
        createdAt: "2022-01-01",
        updatedAt: "2022-01-01",
    },
    {
        id: 2,
        name: "Mobile Development",
        category: "Technical",
        description: "Development of mobile applications.",
        createdAt: "2022-01-01",
        updatedAt: "2022-01-01",
    },
    {
        id: 3,
        name: "UI/UX Design",
        category: "Design",
        description: "Design of user interfaces and user experiences.",
        createdAt: "2022-01-01",
        updatedAt: "2022-01-01",
    },
    {
        id: 4,
        name: "Data Science",
        category: "Data",
        description: "Analysis and interpretation of data.",
        createdAt: "2022-01-01",
        updatedAt: "2022-01-01",
    },
    {
        id: 5,
        name: "Machine Learning",
        category: "AI",
        description: "Development of machine learning models.",
        createdAt: "2022-01-01",
        updatedAt: "2022-01-01",
    },
]