import PhotoPage from '../../components/shared/photo-page';
import { PhotoCategoryEnum } from "../../interfaces/global.enum";

function SeascapePage() {
    return <PhotoPage category={PhotoCategoryEnum.SEASCAPE} />
}

export default SeascapePage;
