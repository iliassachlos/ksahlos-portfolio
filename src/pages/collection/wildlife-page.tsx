import PhotoPage from '../../components/shared/photo-page';
import { PhotoCategoryEnum } from "../../interfaces/global.enum";

function WildlifePage() {
    return <PhotoPage category={PhotoCategoryEnum.WILDLIFE} />
}

export default WildlifePage;
