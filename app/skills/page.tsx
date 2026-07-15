import Link from "next/link"
import { SKILLS } from "./SKILLS"

export default function SkillsPage() {
    const skills = SKILLS
    return (
        <div>
            <h1>Skills</h1>
            <ul>
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