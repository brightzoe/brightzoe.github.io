// @ts-nocheck
import pluginContentDocs from '@docusaurus/plugin-content-docs';
import { normalizeUrl } from '@docusaurus/utils';
/**
 * @param {import('@docusaurus/types').LoadContext} context
 * @returns {import('@docusaurus/types').Plugin}
 */
export default async function docsPluginEnhanced(context, options) {
  console.log('ccc', context, 'ooo', options);
  // const docsPluginInstance = pluginContentDocs.default(context, {
  //   ...options,
  //   path: '',
  //   includeCurrentVersion: false,
  // });

  return {
    // ...docsPluginInstance,
    name: 'tags-plugin',
    async contentLoaded({ actions }) {
      // Create default plugin pages
      // await docsPluginInstance.contentLoaded(...contentLoadedArgs);

      // Create your additional pages
      const { addRoute, createData } = actions;
      const basePath = normalizeUrl([context.baseUrl, '/']);
      console.log('basesss', basePath);
      await addRoute({
        path: basePath,
        exact: true,
        component: '@site/src/pages/index.tsx', // Your component
        modules: {
          // ... The props DocsCalendarPage need to receive
          calendar: { a: '~blog/default/blog-tags-tags-4c2.json' },
        },
      });
    },
  };
}
