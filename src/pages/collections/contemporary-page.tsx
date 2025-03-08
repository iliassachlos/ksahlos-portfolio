import PhotoPage from '../../components/shared/photo-page';
import { PhotoCategoryEnum } from "../../interfaces/global.enum";

function ContemporaryPage() {
    return <PhotoPage category={PhotoCategoryEnum.CONTEMPORARY} />
}

export default ContemporaryPage;
