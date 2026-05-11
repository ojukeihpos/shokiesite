import ExperiencePage from '../components/ExperiencePage';
import { SOFTWARE_CONTENT } from '../constants/experience';

export default function SoftwarePage() {
    /**
     * We simply pass the pre-defined SOFTWARE_CONTENT object 
     * into our shared layout component.
     */
    return <ExperiencePage data={SOFTWARE_CONTENT} />;
}