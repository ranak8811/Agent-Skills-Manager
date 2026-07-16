export type Skill = {
    id: string;
    name: string;
    category: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}

export let SKILLS: Skill[] = [
    {
        id: "1",
        name: "Web Development",
        category: "Technical",
        description: "Development of websites and web applications.",
        createdAt: "2022-01-01",
        updatedAt: "2022-01-01",
    },
    {
        id: "2",
        name: "Mobile Development",
        category: "Technical",
        description: "Development of mobile applications.",
        createdAt: "2022-01-01",
        updatedAt: "2022-01-01",
    },
    {
        id: "3",
        name: "UI/UX Design",
        category: "Design",
        description: "Design of user interfaces and user experiences.",
        createdAt: "2022-01-01",
        updatedAt: "2022-01-01",
    },
    {
        id: "4",
        name: "Data Science",
        category: "Data",
        description: "Analysis and interpretation of data.",
        createdAt: "2022-01-01",
        updatedAt: "2022-01-01",
    },
    {
        id: "5",
        name: "Machine Learning",
        category: "AI",
        description: "Development of machine learning models.",
        createdAt: "2022-01-01",
        updatedAt: "2022-01-01",
    },
]

export async function getSkills() {
    return [...SKILLS]
}

export async function addSkill(skill: Skill) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    SKILLS = [...SKILLS, skill]
    console.log('Skills updated in store ', SKILLS)
    return getSkills()
}