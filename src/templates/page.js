/* global graphql */

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';

import IndexLayout from '../components/layouts/Index';
import Pagination from '../components/blog/Pagination';
import Posts from '../components/blog/Posts';
import Separator from '../components/blog/Separator';
import MetaTags from '../components/blog/MetaTags';

export default function Pages({ pageContext, data }) {
  const { description, siteUrl } = data.site.siteMetadata;
  const { posts, page, pagesSum, prevPath, nextPath } = pageContext;
  return (
    <IndexLayout>
      <section className="main-content">
        <MetaTags
          title={`Page ${page}`}
          path={`/page/${page}`}
          siteUrl={siteUrl}
          tags="webdev, programming, javascript"
          description={description}
          noIndex={false}
        />
        <Row>
          <Col lg={8} lgOffset={2}>
            <Pagination page={page} pagesSum={pagesSum} prevPath={prevPath} nextPath={nextPath} />
            <Separator />
            <Posts posts={posts} />
            <Separator />
            <Pagination page={page} pagesSum={pagesSum} prevPath={prevPath} nextPath={nextPath} />
          </Col>
        </Row>
      </section>
    </IndexLayout>
  );
}

Pages.propTypes = {
  pageContext: PropTypes.object,
  data: PropTypes.object,
};

export const pagesQuery = graphql`
  query PagesSiteMetadata {
    site {
      siteMetadata {
        description
        siteUrl
      }
    }
  }
`;
