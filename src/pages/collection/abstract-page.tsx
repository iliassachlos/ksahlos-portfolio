import PhotoPage from '../../components/shared/photo-page';
import { PhotoCategoryEnum } from "../../interfaces/global.enum";

function AbstractPage() {
    return <PhotoPage category={PhotoCategoryEnum.ABSTRACT} />
}

export default AbstractPage;
