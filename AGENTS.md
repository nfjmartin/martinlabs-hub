<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Project rules

- The design system in `src/styles.css` is dark-only: keep `:root` as the single
  source of the palette and leave `.dark` a no-op, so no light values creep back
  in and break the gradient page background.
- Page background is the `--gradient-background` token painted on `body`; keep
  route-level wrappers transparent so the gradient stays visible.
- Every color token in `src/styles.css` must be written in `oklch`, converted so
  it round-trips exactly to the intended hex — hand-derived hues drift far from
  the requested color.
