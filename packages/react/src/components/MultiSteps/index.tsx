import { Label, MultiStepsContainer, Step, Steps } from './styles'

export interface MultiStepsProps {
  size: number
  currentStep?: number
}

export function MultiSteps({ size, currentStep = 1 }: MultiStepsProps) {
  return (
    <MultiStepsContainer>
      <Label>{`Passo ${currentStep} de ${size}`}</Label>
      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultiStepsContainer>
  )
}

MultiSteps.displayName = 'MultiSteps'
