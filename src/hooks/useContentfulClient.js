import { createClient } from 'contentful';

export default function useContentfulClient() {
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESSTOKEN,
  });

  return {
    getAboutSection: async () => {
      return new Promise((resolve, reject) => {
        client
          .getEntries({
            content_type: 'aboutSection',
            limit: 1,
          })
          .then((entries) => {
            const { heading, content } = entries.items[0].fields;

            client
              .getEntries({
                content_type: 'timelineItem',
                order: '-fields.order',
              })
              .then((entries) => {
                resolve({
                  heading,
                  content,
                  timelineItems: entries.items.map((el) => el.fields),
                });
              })
              .catch((err) => reject(err));
          });
      });
    },
    getPortfolioSection: async () => {
      return new Promise((resolve, reject) => {
        client
          .getEntries({
            content_type: 'portfolioItem',
            order: 'fields.order',
          })
          .then((entries) => {
            resolve(entries.items.map((el) => el.fields));
          })
          .catch((err) => reject(err));
      });
    },
    getHeaderSection: async () => {
      return new Promise((resolve, reject) => {
        client
          .getEntries({
            content_type: 'headerSection',
            limit: 1,
          })
          .then((data) => {
            const { head1, head2, sub1, sub2 } = data.items[0].fields;
            const profilePicture =
              data.items[0].fields.profilePicture.fields.file.url;

            resolve({
              head1,
              head2,
              sub1,
              sub2,
              profilePicture,
            });
          })
          .catch((err) => reject(err));
      });
    },
    getExperienceSection: async () => {
      return new Promise((resolve, reject) => {
        client
          .getEntries({
            content_type: 'experienceSection',
            limit: 1,
          })
          .then((entries) => {
            const { heading, content } = entries.items[0].fields;

            client
              .getEntries({
                content_type: 'experienceItem',
                order: '-fields.order',
              })
              .then((entries) => {
                resolve({
                  heading,
                  content,
                  experienceItems: entries.items.map((el) => ({
                    ...el.fields,
                    employerLogo: el.fields.employerLogo.fields.file.url,
                  })),
                });
              });
          })
          .catch((err) => reject(err));
      });
    },
    getProfilePicture: async () => {
      return new Promise((resolve, reject) => {
        client
          .getEntries({
            content_type: 'headerSection',
            limit: 1,
          })
          .then((data) => {
            resolve(data.items[0].fields.profilePicture.fields.file.url);
          })
          .catch((err) => reject(err));
      });
    },
  };
}
