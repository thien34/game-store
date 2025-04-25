'use client'

import { useState } from 'react'
import SectionTitle from '../sections/SectionTitle'
import SectionContent from '../sections/SectionContent'
import { SectionButton } from '../sections/SectionButton'
import { cn } from '@/lib/utils'
import GitHubWireframe from './wireframes/GitHub'
import AppWindow from './wireframes/AppWindow'
import { YouTubeEmbed } from '@next/third-parties/google'
import { GitHubIcon, YoutubeIcon } from '@/components/Icons'

function ProjectsContents() {
  const [currentState, setCurrentState] = useState<'preview' | 'github'>('preview')

  return (
    <>
      <SectionTitle
        title='Build a multi-product sales website Vítore.'
        caption='vi-store'
        description='E-commerce website project with advanced sales and management.'
        button={{
          title: 'learn more',
          href: '/docs/#'
        }}
      />
      <SectionContent>
        <div className={cn('flex', 'lg:gap-12')}>
          <div className={cn('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
            <div className={cn('flex flex-col gap-3')}>
              <SectionButton
                title='Preview'
                icon={<YoutubeIcon className={cn('my-2 h-16 w-16')} />}
                description='Watch a demo of the Vítore platform features and functionality in action.'
                active={currentState === 'preview'}
                onClick={() => setCurrentState('preview')}
              />
              <SectionButton
                title='Available on GitHub'
                icon={<GitHubIcon className={cn('my-2 h-16 w-16')} />}
                description='Access powerful and flexible package on GitHub with MIT license.'
                active={currentState === 'github'}
                onClick={() => setCurrentState('github')}
              />
            </div>
          </div>
          <div className={cn('w-full', 'lg:w-auto')}>
            <div className={cn('-mt-[41px]')}>
              <div className={cn('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                <AppWindow
                  type='browser'
                  browserTabs={[
                    {
                      icon: <YoutubeIcon className={cn('size-4')} />,
                      title: 'Vítore demo - Youtube',
                      isActive: currentState === 'preview'
                    },
                    {
                      icon: <GitHubIcon className={cn('size-4')} />,
                      title: 'thien34 - GitHub',
                      isActive: currentState === 'github'
                    }
                  ]}
                >
                  {currentState === 'preview' && (
                    <YouTubeEmbed
                      videoid='sIVL4JMqRfc'
                      params='autoplay=1'
                    />
                  )}
                  {currentState === 'github' && (
                    <GitHubWireframe
                      author='thien34'
                      repository='vistore'
                      license='MIT'
                      description='E-commerce website project with advanced sales and management.'
                    />
                  )}
                </AppWindow>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  )
}

export default ProjectsContents
