import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, ShieldCheckIcon } from '@heroicons/react/20/solid'

const creatorFeatures = [
  {
    name: 'Make money: ',
    description: 'Monetize your trading knowledge in few clicks. No need to setup a half-ass solution to achieve that. Our platform is tailored for this.',
    icon: "💵",
  },
  {
    name: 'SEO optimized pages: ',
    description: 'Our pages are SEO optimized on the top level so you can grow audience by launching ads',
    icon: "🎯",
  },

]

const consumerFeatures = [
  {
    name: 'Affordable knowledge: ',
    description: 'Our service is subscription based. No need to pay a huge fee just to get started.',
    icon: "💰",
  },
  {
    name: 'Trading experts: ',
    description: 'We feature vetted trading experts on our platfrom. Reach out to us if you want your favorite trader on our platform.',
    icon: "👨🏻‍💼",
  },

]

export default function FeatureCreator() {
  return (
    <div className="overflow-hidden w-full py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 dark:text-white">Features for Creators</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight dark:text-white sm:text-4xl">Empower your creativity</p>
              <p className="mt-6 text-lg leading-8 dark:text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 space-y-8 text-base leading-7 dark:text-whitelg:max-w-none">
                {creatorFeatures.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold dark:text-white">
                      <div className='absolute left-0 top-0 text-[25px]'>{feature.icon}</div>
                      {feature.name}
                    </dt>
                    <dd className="inline dark:text-white">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="px-6 lg:px-0 lg:pl-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 dark:text-white">Features for Consumers</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight dark:text-white sm:text-4xl">Enhance your experience</p>
              <p className="mt-6 text-lg leading-8 dark:text-white">
                Discover features that help you enjoy our services to the fullest, with real-time updates and comprehensive privacy settings.
              </p>
              <dl className="mt-10 space-y-8 text-base leading-7 dark:text-white lg:max-w-none">
                {consumerFeatures.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold dark:text-white">
                    <div className='absolute left-0 top-0 text-[25px]'>{feature.icon}</div>
                      {feature.name}
                    </dt>
                    <dd className="inline dark:text-white">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
