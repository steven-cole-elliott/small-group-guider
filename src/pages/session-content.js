import React from "react";
import Layout from "../components/layout";
import PageHeaderWithBackButton from "../components/page-header-with-back-button";

export default ({location: {state: {title, content}}}) => (
    <Layout>
        <PageHeaderWithBackButton title={title} goBackTo={"/"} />
        {content.map((c) => <p>{c}</p>)}
    </Layout>
);