'use client'

import { useState, useMemo } from 'react'
import { Container, Section, Eyebrow, Callout } from '@/components/ui'

export default function CostCalculator() {
  const [pricePerGallon, setPricePerGallon] = useState(3.5)
  const [gallonsPerWeek, setGallonsPerWeek] = useState(100)
  const [currentChangeDays, setCurrentChangeDays] = useState(3)
  const [friesPerDay, setFriesPerDay] = useState(200)
  const [filtersDaily, setFiltersDaily] = useState(false)

  const results = useMemo(() => {
    const changesPerWeek = 7 / currentChangeDays
    const gallonsPerChange = gallonsPerWeek / 7 * currentChangeDays
    const currentCostPerWeek = changesPerWeek * gallonsPerChange * pricePerGallon
    const annualCurrentCost = currentCostPerWeek * 52

    const extensionFactor = filtersDaily ? 1.35 : 1.65
    const managedDays = Math.round(currentChangeDays * extensionFactor)
    const managedChangesPerWeek = 7 / managedDays
    const managedCostPerWeek = managedChangesPerWeek * gallonsPerChange * pricePerGallon
    const annualManagedCost = managedCostPerWeek * 52

    const savings = annualCurrentCost - annualManagedCost
    const savingsPercent = annualCurrentCost > 0 ? (savings / annualCurrentCost) * 100 : 0

    const coversPerWeek = friesPerDay * 7
    const costPerCover = coversPerWeek > 0 ? annualCurrentCost / 52 / coversPerWeek : 0
    const managedCostPerCover = coversPerWeek > 0 ? annualManagedCost / 52 / coversPerWeek : 0

    return {
      annualCurrentCost,
      annualManagedCost,
      savings,
      savingsPercent,
      managedDays,
      costPerCover,
      managedCostPerCover,
    }
  }, [pricePerGallon, gallonsPerWeek, currentChangeDays, friesPerDay, filtersDaily])

  return (
    <main>
      <Section className="pt-20 md:pt-28">
        <Container size="md">
          <Eyebrow>Tools</Eyebrow>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">
            Oil cost calculator
          </h1>
          <p className="mt-6 text-lg text-charcoal/70">
            Enter your actual numbers — what you pay, how much you use, how
            often you change. See what NCOMA-standard oil management (daily
            filtration + TPM testing + condition-based discard) saves you.
          </p>
        </Container>
      </Section>

      <Section className="border-t border-charcoal/10">
        <Container size="md">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">Your operation</h2>
              <div className="mt-6 space-y-5">
                <div>
                  <label htmlFor="pricePerGallon" className="font-sans text-sm font-medium text-charcoal/60">
                    What you pay per gallon of oil ($)
                  </label>
                  <input
                    id="pricePerGallon"
                    type="number"
                    value={pricePerGallon}
                    onChange={(e) => setPricePerGallon(Number(e.target.value))}
                    step={0.25}
                    min={0.5}
                    className="mt-1 block h-10 w-full border border-charcoal/20 bg-white px-3 font-sans text-sm tabular-nums focus:border-amber focus:outline-none focus-visible:ring-2 focus-visible:ring-amber/50"
                  />
                </div>
                <div>
                  <label htmlFor="gallonsPerWeek" className="font-sans text-sm font-medium text-charcoal/60">
                    Gallons used per week (all fryers)
                  </label>
                  <input
                    id="gallonsPerWeek"
                    type="number"
                    value={gallonsPerWeek}
                    onChange={(e) => setGallonsPerWeek(Number(e.target.value))}
                    min={1}
                    className="mt-1 block h-10 w-full border border-charcoal/20 bg-white px-3 font-sans text-sm tabular-nums focus:border-amber focus:outline-none focus-visible:ring-2 focus-visible:ring-amber/50"
                  />
                </div>
                <div>
                  <label htmlFor="currentChangeDays" className="font-sans text-sm font-medium text-charcoal/60">
                    How often do you change oil now? (days)
                  </label>
                  <input
                    id="currentChangeDays"
                    type="number"
                    value={currentChangeDays}
                    onChange={(e) => setCurrentChangeDays(Number(e.target.value))}
                    min={1}
                    max={14}
                    className="mt-1 block h-10 w-full border border-charcoal/20 bg-white px-3 font-sans text-sm tabular-nums focus:border-amber focus:outline-none focus-visible:ring-2 focus-visible:ring-amber/50"
                  />
                </div>
                <div>
                  <label htmlFor="friesPerDay" className="font-sans text-sm font-medium text-charcoal/60">
                    Fried covers per day
                  </label>
                  <input
                    id="friesPerDay"
                    type="number"
                    value={friesPerDay}
                    onChange={(e) => setFriesPerDay(Number(e.target.value))}
                    min={1}
                    className="mt-1 block h-10 w-full border border-charcoal/20 bg-white px-3 font-sans text-sm tabular-nums focus:border-amber focus:outline-none focus-visible:ring-2 focus-visible:ring-amber/50"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="filtersDaily"
                    checked={filtersDaily}
                    onChange={(e) => setFiltersDaily(e.target.checked)}
                    className="accent-amber"
                  />
                  <label htmlFor="filtersDaily" className="font-sans text-sm text-charcoal/60">
                    I already filter daily
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Results</h2>
              <div className="mt-6 space-y-6">
                <div className="border-l-4 border-l-charcoal/20 pl-4">
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider text-charcoal/40">Current annual oil cost</p>
                  <p className="mt-1 text-3xl font-bold">${Math.round(results.annualCurrentCost).toLocaleString()}</p>
                  <p className="font-sans text-sm text-charcoal/50">
                    ${results.costPerCover.toFixed(2)} per fried cover · changing every {currentChangeDays} days
                  </p>
                </div>

                <div className="border-l-4 border-l-amber pl-4">
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider text-charcoal/40">With NCOMA-managed protocols</p>
                  <p className="mt-1 text-3xl font-bold text-amber">${Math.round(results.annualManagedCost).toLocaleString()}</p>
                  <p className="font-sans text-sm text-charcoal/50">
                    ${results.managedCostPerCover.toFixed(2)} per cover · extending to {results.managedDays}-day cycles
                  </p>
                </div>

                <div className="bg-amber/5 p-4">
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider text-amber">Annual savings</p>
                  <p className="mt-1 text-3xl font-bold text-amber">${Math.round(results.savings).toLocaleString()}</p>
                  <p className="font-sans text-sm text-charcoal/50">
                    {results.savingsPercent.toFixed(0)}% reduction from {filtersDaily ? 'adding TPM testing + condition-based discard' : 'daily filtration + TPM testing + condition-based discard'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Callout className="mt-12">
            <p className="font-sans text-sm">
              <strong>How this works:</strong> {filtersDaily
                ? 'You already filter daily — good. Adding TPM testing and condition-based discard (instead of a fixed schedule) typically extends oil life an additional 35%, because you stop changing oil that still has usable cycles left.'
                : 'Daily filtration extends oil life by 40–80% (Moreira et al., Choe & Min 2007). Adding TPM testing means you discard based on actual oil condition, not a calendar — stopping both premature changes (wasted oil) and late changes (degraded food).'
              } These estimates are conservative. Actual results depend on menu mix, frying temperature,
              food-to-oil ratio, and filtration equipment. The NCOMA Certified Cooking Oil Management
              Guide covers the full methodology in Part 5 and Part 8.
            </p>
          </Callout>
        </Container>
      </Section>
    </main>
  )
}
