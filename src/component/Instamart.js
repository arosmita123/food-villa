import { useState } from "react"

const Section = ({ title, description, isVisible, setIsVisible }) => {

    return (
        <div className=" border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>
            {isVisible ? (<button className="cursor-pointer underline" onClick={() => setIsVisible(false)}>Hide</button>) : (<button className="cursor-pointer underline" onClick={() => setIsVisible(true)}>Show</button>)}
            {isVisible && <p>{description}</p>}
        </div>
    )
}

const Instamart = () => {
    const [sectionConfig, setSectionConfig] = useState({
        showAbout: true,
        showTeam: false,
        showCareers: true,
    })
    return (
        <div>
            <h1 className="text-3xl, p-2 m-2 font-bold">Instamart</h1>
            <Section title={"About Instamart"}
                description={"What I find remarkable is that this text has been the industry's standard dummy text ever since some printer in the 1500s took a galley of type and scrambled it to make a type specimen book; it has survived not only four centuries of letter-by-letter resetting but even the leap into electronic typesetting, essentially unchanged except for an occasional 'ing' or 'y' thrown in. It's ironic that when the then-understood Latin was scrambled, it became as incomprehensible as Greek; the phrase 'it's Greek to me' and 'greeking' have common seman"}
                isVisible={sectionConfig.showAbout}
                setIsVisible={() =>
                    setSectionConfig({
                        showAbout: true,
                        showTeam: false,
                        showCareers: false,
                    })
                }
            />

            <Section title={"Team Instamart"}
                description={"What I find remarkable is that this text has been the industry's standard dummy text ever since some printer in the 1500s took a galley of type and scrambled it to make a type specimen book; it has survived not only four centuries of letter-by-letter resetting but even the leap into electronic typesetting, essentially unchanged except for an occasional 'ing' or 'y' thrown in. It's ironic that when the then-understood Latin was scrambled, it became as incomprehensible as Greek; the phrase 'it's Greek to me' and 'greeking' have common seman"}
                isVisible={sectionConfig.showTeam}
                setIsVisible={() =>
                    setSectionConfig({
                        showAbout: false,
                        showTeam: true,
                        showCareers: false,
                    })
                }
            />

            <Section title={"Careers"}
                description={"What I find remarkable is that this text has been the industry's standard dummy text ever since some printer in the 1500s took a galley of type and scrambled it to make a type specimen book; it has survived not only four centuries of letter-by-letter resetting but even the leap into electronic typesetting, essentially unchanged except for an occasional 'ing' or 'y' thrown in. It's ironic that when the then-understood Latin was scrambled, it became as incomprehensible as Greek; the phrase 'it's Greek to me' and 'greeking' have common seman"}
                isVisible={sectionConfig.showCareers}
                setIsVisible={() =>
                    setSectionConfig({
                        showAbout: false,
                        showTeam: false,
                        showCareers: true,
                    })
                }
            />

        </div>
    )
}
export default Instamart