import PhotoPage from '../../components/shared/photo-page';
import { PhotoCategoryEnum } from "../../interfaces/global.enum";

function LocalPage() {
    return <PhotoPage category={PhotoCategoryEnum.LOCAL_ART} />
}

export default LocalPage;
