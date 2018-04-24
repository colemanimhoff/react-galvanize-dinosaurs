import React from 'react'
import SkillList from './SkillList'

class Profiles extends React.Component {
    state = {
        showSkills: false
    }

    toggleSkills = (event) => {
        console.log(event.target)
        const skills = !this.state.showSkills
        this.setState({
            showSkills: skills
        })
    }

    render() {
        const showSkills = this.state.showSkills
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
                                {showSkills && <SkillList skills={dinosaur.skills} />}
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