// Import React Libraries
import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

// Import Components
import CommentItem from '../../components/Comment/comment';
import AverageRatingItem from '../../components/Comment/averageRating';
import CommentPresentation from '../../components/Comment/commentPresentation';

// Import Datas
import { webSitesList } from '../../datas/review_WebSites';
import { commentsPageContent } from '../../datas/pageContent/commentsPageContent';

// Import Style
import styled from 'styled-components';
import { PageWrapper, PageTitle } from '../../utils/style/js/GlobalStyle';

const CommentListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function Comment () {
  const { i18n, t } = useTranslation();

  console.log('Comment Page');
  console.log(`language : ${i18n.language}`);

  return (
    <>
      <Helmet>
        <title>{t(`${commentsPageContent.pageTitle}`)}</title>
        <meta
          name="description"
          content={`${commentsPageContent.referencement.map((keyWords) => (keyWords)).join(', ')} `}
        />
      </Helmet>

      <PageWrapper id='commentPageWrapper'>
        <PageTitle>{t('OurComments')}</PageTitle>

        <CommentPresentation webSitesList={webSitesList}/>

        {webSitesList.map((webSite) => (
          <CommentListWrapper key={webSite.name} id='commentListWrapperAirBnB'>
            <AverageRatingItem webSite={webSite}/>
            {webSite[`reviewList${i18n.language}`].map((review, index) => (
              <CommentItem key={index} comment={review} index={index}/>
            ))}
          </CommentListWrapper>
        ))}
      </PageWrapper>
      </>
  );
}

export default Comment;
