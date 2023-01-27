import { Footer, Header, Main } from '@/client/presentation/components'
import { WhyChooseUsSection } from '@/client/presentation/sections'
import { normalizeData } from '@/client/presentation/helpers'
import { getOurServicesPageQuery } from '@/client/infra/graphql/our-services/queries'
import { OurServicesQueryModel } from '@/client/infra/graphql/our-services/models'
import { getSharedQuery } from '@/client/infra/graphql/shared/queries'
import { SharedQueryModel } from '@/client/infra/graphql/shared/models'
import { client } from '@/client/infra/graphql/common/client'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const [ourServiceResponse, sharedResponse] = await Promise.all([
    client.request(getOurServicesPageQuery),
    client.request(getSharedQuery),
  ])
  const { ourService } = normalizeData(ourServiceResponse)
  const { shared } = normalizeData(sharedResponse)
  return {
    props: { ...ourService, ...shared },
    revalidate: 60 * 10,
  }
}

export default function OurServices({
  footer,
  header,
  whyChooseUs,
}: OurServicesQueryModel & SharedQueryModel) {
  return (
    <>
      <Header {...header} />
      <Main>
        <WhyChooseUsSection {...whyChooseUs} />
      </Main>
      <Footer {...footer} />
    </>
  )
}
