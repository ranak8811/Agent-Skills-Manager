import { notFound } from "next/navigation";
import { getSkills } from "../SKILLS";

type SkillPageProps = {
    // params: Promise<{ identifier: string }>
    params: { identifier: string }
}

export default async function SkillPage({ params }: SkillPageProps) {

    const skills = await getSkills()

    const { identifier } = await params

    // console.log('identifier ', identifier)
    // console.log('skills ', skills)

    const skill = skills.find((s) => s.id === identifier)

    // console.log('skills details page. skill found ', skill)

    if (!skill) {
        return notFound()
    }
    return (
        <div>

            <div className="p-4 form flex flex-col gap-4 max-w-md mx-auto">
                <h1>Skill: {skill?.name}</h1>
                <p>Description: {skill?.description}</p>
                <p>Category: {skill?.category}</p>
                <p>Created At: {skill?.createdAt}</p>
                <p>Updated At: {skill?.updatedAt}</p>
            </div>

        </div>
    )
}