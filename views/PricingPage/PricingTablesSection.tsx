import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>Get 1 month for free by subscribing yearly!</SectionTitle>
      <AutofitGrid>
        <PricingCard
          title="Hobby"
          description=""
          benefits={['20 queries/month', '1 active Database', 'Secure Connection', 'API Access']}
        >
          $0<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Starter"
          description=""
          benefits={['50 queries/month', '3 active Database', 'Secure Connection', 'API Access', 'GPT4 Option']}
          isOutlined
        >
          $17<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Premium"
          description=""
          benefits={['100 queries/month', '5 active Database', 'Secure Connection', 'API Access', 'GPT4 Option']}
        >
          $37<span>/month</span>
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;
