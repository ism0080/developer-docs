import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://docs.isaacmackle.com',
    integrations: [
        starlight({
            title: 'Developer Docs',
            social: {
                github: 'https://github.com/ism0080'
            },
            sidebar: [
                {
                    label: 'Resources',
                    autogenerate: {
                        directory: 'resources'
                    }
                },
                {
                    label: 'Development',
                    autogenerate: {
                        directory: 'dev'
                    }
                }
            ],
            customCss: ['./src/tailwind.css']
        }),
        tailwind({ applyBaseStyles: false })
    ]
});
