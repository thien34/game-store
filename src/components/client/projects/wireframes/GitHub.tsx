import { cn } from '@/lib/utils'
import { SkeletonSm } from './Skeletons'

interface GithubWireframeProps {
  author?: string
  license?: string
  repository: string
  description: string
}

function GitHubWireframe({ author = '', license = '', repository, description }: Readonly<GithubWireframeProps>) {
  return (
    <div className={cn('h-full w-full bg-white p-4 text-sm text-slate-600', 'dark:bg-slate-900 dark:text-slate-400')}>
      <div className={cn('flex items-center gap-1')}>
        <div className={cn('mr-1')}>
          <SkeletonSm />
        </div>
        {author ? (
          <div className={cn('-mt-0.5 text-blue-700', 'dark:text-blue-500')}>{author}</div>
        ) : (
          <SkeletonSm w={64} />
        )}
        <div className={cn('-mt-0.5')}>/</div>
        <div className={cn('-mt-0.5 font-bold text-blue-700', 'dark:font-semibold dark:text-blue-500')}>
          {repository}
        </div>
        <div className={cn('ml-1 rounded-full border px-2 py-0.5 text-xs')}>public</div>
      </div>
      <div className={cn('mt-2')}>
        <p>{description}</p>
      </div>
      <div className={cn('mt-6 flex flex-col gap-3')}>
        <div className={cn('flex items-center gap-2')}>
          <SkeletonSm />
          {license ? (
            <div className={cn('')}>
              <p>{license} license</p>
            </div>
          ) : (
            <SkeletonSm w={64} />
          )}
        </div>
        <div className={cn('flex items-center gap-3')}>
          <div className={cn('flex items-center gap-1')}>
            <SkeletonSm />
            <SkeletonSm w={48} />
          </div>
          <div className={cn('flex items-center gap-1')}>
            <SkeletonSm />
            <SkeletonSm w={56} />
          </div>
        </div>
      </div>
      <div className={cn('mt-6 flex gap-2')}>
        <div className={cn('flex h-8 flex-1 items-center justify-center rounded-lg border')}>
          <div className={cn('flex items-center gap-1')}>
            <SkeletonSm />
            <SkeletonSm w={48} />
          </div>
        </div>
        <div className={cn('flex h-8 flex-1 items-center justify-center rounded-lg border')}>
          <div className={cn('flex items-center gap-1')}>
            <SkeletonSm />
            <SkeletonSm w={64} />
          </div>
        </div>
      </div>
      <div className={cn('mt-4 flex border-b')}>
        <div className={cn('-mb-[2px] flex h-12')}>
          <div className={cn('flex items-center gap-1 border-b-[3px] border-amber-400 px-6 dark:border-amber-900')}>
            <SkeletonSm />
            <SkeletonSm w={32} />
          </div>
        </div>
        <div className={cn('-mb-[2px] flex h-12')}>
          <div className={cn('flex items-center gap-1 border-b-[3px] border-transparent px-6')}>
            <SkeletonSm />
            <SkeletonSm w={40} />
          </div>
        </div>
        <div className={cn('-mb-[2px] flex h-12')}>
          <div className={cn('flex items-center gap-1 border-b-[3px] border-transparent px-6')}>
            <SkeletonSm />
            <SkeletonSm w={80} />
          </div>
        </div>
        <div className={cn('-mb-[2px] flex h-12')}>
          <div className={cn('flex items-center gap-1 border-b-[3px] border-transparent px-6')}>
            <SkeletonSm />
            <SkeletonSm w={48} />
          </div>
        </div>
        <div className={cn('-mb-[2px] flex h-12')}>
          <div className={cn('flex items-center gap-1 border-b-[3px] border-transparent px-6')}>
            <SkeletonSm />
            <SkeletonSm w={40} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GitHubWireframe
