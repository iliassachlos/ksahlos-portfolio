import CategoriesGrid from "../components/shared/categories-grid";
import { collectionsCategories } from "../data/collections-categories";

function CollectionsPage() {
    return <CategoriesGrid categories={collectionsCategories} />
}

export default CollectionsPage;
