import React from 'react'
import TeamMember from './TeamMember'
import "./Team.css"

export default function Team() {
    return (
        <section className='team-container'>
            <div className="section-title">
                <h2>تیم</h2>
                <h3>تیم ما را بررسی کنید</h3>
            </div>
            <div className="team-members">

                <TeamMember
                image= "./images/team-img/team-1.jpg"
                title= "والتر وایت"
                role= "مدیر ارشد اجرایی"
                ></TeamMember>

                <TeamMember
                image= "./images/team-img/team-2.jpg"
                title= "سارا جونسون"
                role= "مدیر تولید"
                ></TeamMember>

                <TeamMember
                image= "./images/team-img/team-3.jpg"
                title= "ویلیام اندرسون"
                role= "CTO"
                ></TeamMember>

                <TeamMember
                image= "./images/team-img/team-4.jpg"
                title= "آماندا جپسون"
                role= "حسابدار"
                ></TeamMember>
                
            </div>
            
        </section>
    )
}
