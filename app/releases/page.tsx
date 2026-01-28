import { Tag, Calendar, FileText, ExternalLink, Download } from "lucide-react";
import Link from "next/link";
import { FaLinux, FaWindows, FaApple } from "react-icons/fa";

interface GitHubAsset {
  name: string;
  browser_download_url: string;
  size: number;
}

interface GitHubRelease {
  id: number;
  tag_name: string;
  name: string;
  body: string;
  published_at: string;
  html_url: string;
  prerelease: boolean;
  assets: GitHubAsset[];
}

// Filter to only show main downloadable files
function getDownloadableAssets(assets: GitHubAsset[]): GitHubAsset[] {
  return assets.filter((asset) => {
    const name = asset.name.toLowerCase();
    return (
      name.endsWith(".dmg") ||
      name.endsWith(".exe") ||
      name.endsWith(".appimage")
    );
  });
}

function getAssetInfo(name: string): { label: string; icon: React.ReactNode } {
  const lowerName = name.toLowerCase();
  if (lowerName.includes("mac-arm64") || lowerName.includes("mac-arm"))
    return { label: "macOS (Apple Silicon)", icon: <FaApple className="size-3" /> };
  if (lowerName.includes("mac-x64") || lowerName.includes("mac-intel"))
    return { label: "macOS (Intel)", icon: <FaApple className="size-3" /> };
  if (lowerName.includes("mac"))
    return { label: "macOS", icon: <FaApple className="size-3" /> };
  if (lowerName.includes("win"))
    return { label: "Windows", icon: <FaWindows className="size-3" /> };
  if (lowerName.includes("linux"))
    return { label: "Linux", icon: <FaLinux className="size-3" /> };
  return { label: name, icon: <Download className="size-3" /> };
}

async function getReleases(): Promise<GitHubRelease[]> {
  const res = await fetch(
    "https://api.github.com/repos/joshkotrous/tome/releases",
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 300 }, // Revalidate every 5 minutes
    }
  );

  if (!res.ok) {
    return [];
  }

  const releases: GitHubRelease[] = await res.json();
  
  // Sort by published date, newest first
  return releases.sort(
    (a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
  );
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function parseMarkdown(text: string): string {
  // Basic markdown parsing for release notes
  return text
    .replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold mt-4 mb-2">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-xl font-semibold mt-4 mb-2">$1</h2>')
    .replace(/^\* (.*$)/gim, '<li class="ml-4 text-zinc-400">• $1</li>')
    .replace(/^- (.*$)/gim, '<li class="ml-4 text-zinc-400">• $1</li>')
    .replace(/\*\*(.*)\*\*/gim, "<strong>$1</strong>")
    .replace(/\*(.*)\*/gim, "<em>$1</em>")
    .replace(/`([^`]+)`/gim, '<code class="bg-zinc-800 px-1 rounded text-sm">$1</code>')
    .replace(/\n/gim, "<br />");
}

export default async function ReleasesPage() {
  const releases = await getReleases();

  return (
    <div className="relative min-h-screen w-full overflow-auto pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-12 space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-white to-zinc-400 text-transparent bg-clip-text">
            Releases
          </h1>
          <p className="text-zinc-400 text-lg">
            Download previous versions or see what&apos;s new in each release
          </p>
        </div>

        {releases.length === 0 ? (
          <div className="text-center text-zinc-400 py-20">
            <p>Unable to load releases. Please check back later.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {releases.map((release, index) => (
              <div
                key={release.id}
                className={`relative border rounded-lg bg-zinc-900/50 backdrop-blur-sm overflow-hidden transition-all hover:border-zinc-700 ${
                  index === 0 ? "border-zinc-600" : "border-zinc-800"
                }`}
              >
                {index === 0 && (
                  <div className="absolute top-0 right-0 bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-900 text-xs font-semibold px-3 py-1 rounded-bl-lg border-l border-b border-zinc-500 text-zinc-200 shadow-[inset_1px_1px_0px_rgba(255,255,255,0.1)]">
                    Latest
                  </div>
                )}
                {release.prerelease && index !== 0 && (
                  <div className="absolute top-0 right-0 bg-gradient-to-br from-zinc-600 via-zinc-500 to-zinc-700 text-xs font-semibold px-3 py-1 rounded-bl-lg border-l border-b border-zinc-500 text-zinc-200">
                    Pre-release
                  </div>
                )}

                <div className="p-6">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <Tag className="size-5 text-zinc-400" />
                      <h2 className="text-2xl font-bold">
                        {release.name || release.tag_name}
                      </h2>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-zinc-400">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="size-4" />
                        {formatDate(release.published_at)}
                      </div>
                      <Link
                        href={release.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 hover:text-white transition-colors"
                      >
                        <ExternalLink className="size-4" />
                        View on GitHub
                      </Link>
                    </div>
                  </div>

                  {/* Downloads */}
                  {getDownloadableAssets(release.assets).length > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-zinc-300 mb-3">
                        <Download className="size-4" />
                        <span className="font-medium">Download</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {getDownloadableAssets(release.assets).map((asset) => {
                          const { label, icon } = getAssetInfo(asset.name);
                          return (
                            <Link
                              key={asset.name}
                              href={asset.browser_download_url}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-zinc-800 border border-zinc-700 rounded text-xs text-zinc-300 hover:bg-zinc-700 hover:border-zinc-600 transition-all"
                            >
                              {icon}
                              {label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Release Notes */}
                  {release.body && (
                    <div>
                      <div className="flex items-center gap-2 text-zinc-300 mb-3">
                        <FileText className="size-4" />
                        <span className="font-medium">Changelog</span>
                      </div>
                      <div
                        className="text-sm text-zinc-400 leading-relaxed prose prose-invert prose-sm max-w-none"
                        dangerouslySetInnerHTML={{
                          __html: parseMarkdown(release.body),
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Background glow effect */}
      <div className="fixed -bottom-80 left-1/2 -translate-x-1/2 w-full h-96 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.00)_70%)] pointer-events-none" />
    </div>
  );
}
