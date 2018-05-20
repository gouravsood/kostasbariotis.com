import React from 'react';
import GatsbyLink from 'gatsby-link';
import dateformat from 'dateformat';
import PropTypes from 'prop-types';
import { css } from 'glamor';

const navigateLink = css({
  fontSize: '1.11em',
  fontWeight: 'bold',
  color: '#8ab2ff',
  marginBottom: '5px',
});

const NavigateLink = ({ post }) =>
  post && (
    <div>
      <GatsbyLink className={navigateLink} to={post.frontmatter.path}>
        {post.frontmatter.title}
      </GatsbyLink>
      <div>{dateformat(post.frontmatter.date, 'd mmmm yyyy')}</div>
      <p>{`${post.excerpt}`}</p>
    </div>
  );

NavigateLink.propTypes = {
  post: PropTypes.object,
};

export default NavigateLink;