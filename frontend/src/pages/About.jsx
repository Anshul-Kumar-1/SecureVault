import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHeader from "../components/dashboard/DashboardHeader";

import AboutCard from "../components/about/AboutCard";
import Features from "../components/landing/Features";
import Workflow from "../components/landing/WorkFlow";
import TechStack from "../components/landing/TechStack";
import DeveloperCard from "../components/about/DeveloperCard";

import "../components/about/About.css";

function About() {
    return (
        <DashboardLayout>
            <DashboardHeader
                title="About SecureVault"
                subtitle="Learn more about SecureVault, its technology, and security."
            />

            <div className="about-page">

                <AboutCard />

                <Features compact />

                <Workflow compact />

                <TechStack compact />

                <DeveloperCard />

            </div>

        </DashboardLayout>
    );
}

export default About;