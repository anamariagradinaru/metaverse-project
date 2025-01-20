import ContactSection from './components/Contact/page';
import DashboardComponent from './components/Dashboard/page';
import EventSection from './components/Events/page';
import HomeComponent from './components/HomeComponent/page';
import TeamComponent from './components/TeamComponent/page';
import './globals.css';

export default function Home() {
    return (
        <div>
            <DashboardComponent />
            <HomeComponent />
            <EventSection />
            <TeamComponent />
            <ContactSection />
        </div>
    );
}
