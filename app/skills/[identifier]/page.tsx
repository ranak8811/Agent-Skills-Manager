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