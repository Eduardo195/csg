import React from 'react';
import SideImageLayout from 'components/layouts/sideImageLayout';

const ArticleShort = (props) => {
    const { title, shortDesc, author } = props.content;
    return (
      <article className="short">
        <SideImageLayout anchorClassName="flex flex--col" alt>
          <h2>{title}</h2>
          <main>
            {shortDesc}
          </main>
          <cite>{author}</cite>
        </SideImageLayout>
      </article>
    );
};

ArticleShort.propTypes = {
    content: React.PropTypes.object.isRequired,
};

export default ArticleShort;
