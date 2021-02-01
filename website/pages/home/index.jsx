import UseCases from '@hashicorp/react-use-cases'
import BasicHero from '../../components/basic-hero'
import ConsulEnterpriseComparison from '../../components/enterprise-comparison/consul'
import PrefooterCTA from '../../components/prefooter-cta'
import LearnCallout from '../../components/learn-callout'
import CaseStudyCarousel from '../../components/case-study-carousel'
import ProductFeaturesList from '@hashicorp/react-product-features-list'
import HcpCalloutSection from 'components/hcp-callout-section'
import MiniCTA from '../../components/mini-cta'

export default function HomePage() {
  return (
    <div className="p-home">
      <BasicHero
        brand="consul"
        heading="Service Networking Across Any Cloud"
        content="Automate network configurations, discover services, and enable secure connectivity across any cloud or runtime."
        links={[
          {
            text: 'Get Started',
            url: 'https://learn.hashicorp.com/consul',
          },
          {
            text: 'Try Cloud',
            url: 'https://cloud.hashicorp.com/',
          },
          {
            text: 'Download CLI',
            url: '/downloads',
            type: 'download',
          },
        ]}
        backgroundImage
      />

      <ProductFeaturesList
        heading="Why Consul?"
        features={[
          {
            title: 'Integrate and Extend With Kubernetes',
            content:
              'Quickly deploy Consul on Kubernetes leveraging Helm. Automatically inject sidecars for Kubernetes resources. Federate multiple clusters into a single service mesh.',
            icon: require('./img/why-consul/kubernetes.svg'),
          },
          {
            title: 'Service Mesh Across Any Runtime',
            content:
              'Deploy service mesh within any runtime or infrastructure - Bare Metal, Virtual Machines, and Kubernetes clusters, across any cloud.',
            icon: require('./img/why-consul/service-mesh-runtime.svg'),
          },
          {
            title: 'Dynamic Load Balancing',
            content:
              'Resolve discovered services through integrated DNS. Automate 3rd party load balancers (F5, NGINX, HAProxy). Eliminate manual configuration of network devices.',
            icon: require('./img/why-consul/dynamic-load-balancing.svg'),
          },
          {
            title: 'Secure, Multi-Cloud Service Networking',
            content:
              'Secure services running in any environment leveraging intention based policies and automatic mTLS encryption between service mesh resources',
            icon: require('./img/why-consul/cloud.svg'),
          },
          {
            title: 'Service Discovery with Health Checking',
            content:
              'Consul enables detecting the deployment of new services, changes to existing ones, and provides real time agent health to reduce downtime.',
            icon: require('./img/why-consul/health.svg'),
          },
          {
            title: 'Robust Ecosystem',
            content:
              'Consul offers support for and integrations with many popular DevOps and Networking tools.',
            icon: require('./img/why-consul/world.svg'),
          },
        ]}
      />

      <LearnCallout
        headline="Get hands-on experience with Consul"
        brand="consul"
        items={[
          {
            title: 'Try Consul Service Mesh on kind',
            category: 'Step-by-Step Tutorial',
            time: '15 mins',
            link:
              'https://learn.hashicorp.com/tutorials/consul/kubernetes-kind',
            image: require('./img/learn/getting-started.svg?url'),
          },
          {
            title: 'Secure Consul with Vault',
            category: 'Step-by-Step Tutorials',
            time: '45 mins',
            link: 'https://learn.hashicorp.com/collections/consul/vault-secure',
            image: require('./img/learn/Vault.svg?url'),
          },
        ]}
      />

      <CaseStudyCarousel
        title="Trusted by startups and the world’s largest organizations"
        caseStudies={[
          {
            quote:
              'Consul lets us spread more than 200 microservices over several AKS clusters. Each AKS cluster feeds into a Consul cluster that forms a larger service discovery mesh that allows us to find and connect services in a matter of minutes.',
            caseStudyURL: 'https://www.hashicorp.com/case-studies/mercedes/',
            person: {
              firstName: 'Sriram',
              lastName: 'Govindarajan',
              photo:
                'https://www.datocms-assets.com/2885/1589431834-sriram-govindarajan.jpg',
              title: 'Principal Infrastructure Engineer',
            },
            company: {
              name: 'Mercedes-Benz Research & Development (MBRDNA)',
              logo: require('./img/quotes/mercedes-logo.svg?url'),
            },
          },
          {
            quote:
              'Consul has fully replaced our manual service discovery activities with automated workflows and we’ve repurposed as much as 80% of our Consul staff to other projects because the tool is so reliable, efficient, and intelligent.',
            caseStudyURL:
              'https://www.hashicorp.com/resources/criteo-containers-consul-connect/',
            person: {
              firstName: 'Pierre',
              lastName: 'Souchay',
              photo:
                'https://www.datocms-assets.com/2885/1589431828-pierre-souchay.jpg',
              title: 'Discovery and Security Authorization Lead',
            },
            company: {
              name: 'Criteo',
              logo: require('./img/quotes/criteo-logo.svg?url'),
            },
          },
        ]}
        logoSection={{
          grayBackground: true,
          featuredLogos: [
            {
              companyName: 'Mercedes-Benz Research & Development (MBRDNA)',
              url: require('./img/quotes/mercedes-logo.svg?url'),
            },
            {
              companyName: 'Criteo',
              url: require('./img/quotes/criteo-logo.svg?url'),
            },
            {
              companyName: 'Barclays',
              url: require('./img/quotes/barclays-logo.svg?url'),
            },
            {
              companyName: 'Citadel',
              url: require('./img/quotes/citadel-logo.svg?url'),
            },
            {
              companyName: 'Ample Organics',
              url:
                'https://www.datocms-assets.com/2885/1589354369-ample-organics-logo.png?w=600',
            },
          ],
        }}
      />
      <MiniCTA
        title="Are you using Consul in production?"
        link={{
          text: 'Share your success story and receive special Consul swag.',
          url:
            'https://docs.google.com/forms/d/1B-4XlRndv2hX9G4Gt2dMnJBqilctrrof7dfpyQ1EVIg/edit',
          type: 'outbound',
        }}
      />

      <div className="use-cases g-grid-container">
        <h2 className="g-type-display-2">Use Cases</h2>
        <UseCases
          items={[
            {
              title: 'Service Discovery and Health Checking',
              description:
                'Enable services to locate other services running in any environment and provide real-time health status.',
              image: {
                url: require('./img/use-cases/service-discovery-and-health-checking.svg?url'),
                format: 'svg',
              },
              link: {
                title: 'Learn more',
                url: '/use-cases/service-discovery-and-health-checking',
              },
            },
            {
              title: 'Network Infrastructure Automation',
              description:
                'Reduce burden of manual, ticket-based networking tasks.',
              image: {
                url: require('./img/use-cases/network-infrastructure-automation.svg?url'),
                format: 'svg',
              },
              link: {
                title: 'Learn more',
                url: '/use-cases/network-infrastructure-automation',
              },
            },
            {
              title: 'Multi-Platform Service Mesh',
              description:
                'Secure, modern application networking across any cloud or runtime.',
              image: {
                url: require('./img/use-cases/multi-platform-service-mesh.svg?url'),
                format: 'svg',
              },
              link: {
                title: 'Learn more',
                url: '/use-cases/multi-platform-service-mesh',
              },
            },
          ]}
        />
      </div>

      <HcpCalloutSection
        id="cloud-offerings"
        title="HCP Consul"
        chin="Available on AWS"
        description="A fully managed service mesh to discover and securely connect any service."
        image={require('./img/hcp-consul.svg?url')}
        links={[
          {
            text: 'Learn More',
            url: 'https://cloud.hashicorp.com/',
          },
          {
            text: 'Looking for Consul Service on Azure?',
            url: 'https://www.hashicorp.com/products/consul/service-on-azure',
            type: 'inbound',
          },
        ]}
      />

      <ConsulEnterpriseComparison />
      <PrefooterCTA />
    </div>
  )
}
