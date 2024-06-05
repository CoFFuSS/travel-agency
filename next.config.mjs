import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `
    @import "./src/styles/vars.scss";
    @import "./src/styles/utils.scss";
  `,
  },
};

export default withNextIntl(nextConfig);
