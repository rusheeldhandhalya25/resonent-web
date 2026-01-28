import AppButton from "../buttons/AppButtons"

const ProjectCard = ({ProductDesign , Year ,Heading}) =>{
    <div className="bg-cardClr border border-lightOutlineClr border-xl font-body rounded-md">
        <div className="flex flex-row">
            <AppButton variant="primary"
                        size="xs"
                        rounded="full"
                        className="px-1 py-0.5 flex items-start">{ProductDesign}</AppButton>

            <div className="bg-cardClr rounded-full flex items-center justify-center px-2 py-1 text-16 ">
                {Year}
            </div>

        </div>

        <div className="font-5 font-body text-28 flex items-start"> 
                {Heading}
        </div>

    </div>
}

export default ProjectCard;