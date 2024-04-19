// Import React Libraries
import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

// Import Components
import TopIllustration from '../../components/TopIllustration/TopIllustration';
import CommentItem from '../../components/Comment/comment';
import AverageRatingItem from '../../components/Comment/averageRating';
import CommentPresentation from '../../components/Comment/commentPresentation';

// Import Datas
import { webSitesList } from '../../datas/review_WebSites';
import { commentsPageContent } from '../../datas/pageContent/commentsPageContent';

// Import Image
import commentIllustration from '../../assets/topIllustrations/CommentTopIllustration.jpg';

// Import Style
import { PageWrapper } from '../../utils/style/js/GlobalStyle';
import { PageTitle } from '../../utils/style/js/Font_Style';
import { CommentListWrapper } from '../../utils/style/js/CommentStyle';

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
      <TopIllustration image={commentIllustration}/>
      <PageWrapper id='commentPageWrapper'>
        <PageTitle>{t('OurComments')}</PageTitle>

        <CommentPresentation webSitesList={webSitesList}/>

        {webSitesList.map((webSite) => (
          <CommentListWrapper key={webSite.name} id={`${webSite.name}`}>
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
