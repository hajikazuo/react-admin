import { ListingTools } from "../../shared/components";
import { Layout } from "../../shared/layout/Layout";

export const Dashboard = () => {
    return (
        <Layout
            title="Home Page"
            toolbar={(
                <ListingTools
                    showInputSearch
                />
            )}
        >
            testando
        </Layout>
    );
}