import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  RedditShareButton,
} from 'react-share';

import { Row, Col } from 'react-flexbox-grid';

const shareButtonsListItem = css({
  marginLeft: '5px',
  marginRight: '5px',
  '@media (max-width: 768px)': {
    width: '100%',
  },
});
const shareTwitterButton = css({
  color: '#00aced',
  cursor: 'pointer',
  '@media (max-width: 768px)': {
    backgroundColor: '#00aced',
    color: '#fff',
    padding: '0.25em',
    width: '100%',
    display: 'block',
  },
});
const shareRedditButton = css({
  cursor: 'pointer',
  color: '#ff5700',
  '@media (max-width: 768px)': {
    backgroundColor: '#ff5700',
    color: '#fff',
    padding: '0.25em',
    width: '100%',
    display: 'block',
  },
});
const shareFacebookButton = css({
  color: '#3b5998',
  cursor: 'pointer',
  '@media (max-width: 768px)': {
    backgroundColor: '#3b5998',
    color: '#fff',
    padding: '0.25em',
    width: '100%',
    display: 'block',
  },
});
const shareGooglePlusButton = css({
  color: '#dd4b39',
  cursor: 'pointer',
  '@media (max-width: 768px)': {
    backgroundColor: '#dd4b39',
    color: '#fff',
    padding: '0.25em',
    width: '100%',
    display: 'block',
  },
});

const Share = ({ draft, title, fullUrl }) => (
  <div>
    {!draft ? (
      <Row center="sm">
        <Col className={shareButtonsListItem.toString()}>
          <b>Share this post on:</b>
        </Col>
        <Col className={shareButtonsListItem.toString()}>
          <TwitterShareButton url={fullUrl} title={title} via="kbariotis">
            <span className={shareTwitterButton.toString()}>Twitter</span>
          </TwitterShareButton>
        </Col>
        <Col className={shareButtonsListItem.toString()}>
          <FacebookShareButton url={fullUrl}>
            <span className={shareFacebookButton}>Facebook</span>
          </FacebookShareButton>
        </Col>
        <Col className={shareButtonsListItem.toString()}>
          <GooglePlusShareButton url={fullUrl}>
            <span className={shareGooglePlusButton}>Google+</span>
          </GooglePlusShareButton>
        </Col>
        <Col className={shareButtonsListItem.toString()}>
          <RedditShareButton title={title} url={fullUrl}>
            <span className={shareRedditButton}>Reddit</span>
          </RedditShareButton>
        </Col>
      </Row>
    ) : (
      <small>
        This is a draft post, thus sharing is disabled. Please do not share untill is ready for
        prime time.
      </small>
    )}
  </div>
);

Share.propTypes = {
  draft: PropTypes.bool,
  title: PropTypes.string,
  fullUrl: PropTypes.string,
};

export default Share;