'use client'
import { useParams } from "next/navigation";
import { Skill, SKILLS } from "../SKILLS";
import { useEffect, useState } from "react";

export default function SkillPage() {
    const params = useParams<{ identifier: string }>();
    const [skills, setSkills] = useState(SKILLS)
    const [skill, setSkill] = useState<Skill | null>(null)
    useEffect(() => {
        const foundSkill = skills.find(skill => skill.id === Number(params.identifier))
        if (foundSkill) {
            setSkill(foundSkill)
        }
    }, [params])

    console.log('skills details page. skill found ', skill)
    return (
        <div>
            {
                skill ? (
                    <>
                        <h1>Skill: {skill?.name}</h1>
                        <p>Description: {skill?.description}</p>
                        <p>Category: {skill?.category}</p>
                        <p>Created At: {skill?.createdAt}</p>
                        <p>Updated At: {skill?.updatedAt}</p>
                    </>
                ) : (
                    <h1>Skill not found</h1>
                )
            }
        </div>
    )
}