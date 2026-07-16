import Link from "next/link"
import { getSkills } from "./SKILLS"

export default async function SkillsPage() {
    const skills = await getSkills()
    return (
        <div className="p-4 flex flex-col justify-center items-center gap-4 max-w-md mx-auto">
            <h1>Skills</h1>
            <Link href="/skills/create">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Create Skill</button>
            </Link>
            <ul className="menu">
                {skills.map((skill) => (
                    <li key={skill.id}>
                        <Link href={`/skills/${skill.id}`}>
                            <div>{skill.name}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}