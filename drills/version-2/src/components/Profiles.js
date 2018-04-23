import React from 'react'
import SkillList from './SkillList'

class Profiles extends React.Component {

    toggleSkills = (event) => {
        if (event.target.parentNode.classList.contains("profile-header")) {
            event.target.parentNode.parentNode.childNodes[1].classList.toggle("hidden")
        }
    }

    render() {
        return (
            <main>
                <section id="profiles-container">
                    <h2>Profiles</h2>
                    <ul id="profiles">
                    {this.props.dinosaurs.map(dinosaur => {
                        return (
                        <li key={dinosaur.name}>
                            <div  className="profile-card"> 
                                <header className="profile-header" onClick={this.toggleSkills}>
                                    <img src={dinosaur.image} alt={dinosaur.name}/>
                                     <h2>{dinosaur.name}</h2>
                                </header>
                                <SkillList skills={dinosaur.skills} />
                            </div>
                        </li>
                        )
                    })}
                    </ul>
                </section>
            </main>
        )
    }
}

export default Profiles