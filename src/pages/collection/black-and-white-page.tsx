import PhotoPage from '../../components/shared/photo-page';
import { PhotoCategoryEnum } from "../../interfaces/global.enum";

function BlackAndWhitePage() {
    return <PhotoPage category={PhotoCategoryEnum.BLACK_AND_WHITE} />
}

export default BlackAndWhitePage;
