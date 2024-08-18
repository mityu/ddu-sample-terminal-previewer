function s:ddu_terminal_preview(ui) abort
  const opts = #{
    \ sources: [#{name: 'terminal_preview'}],
    \ ui: a:ui ?? 'ff',
    \ }
  call ddu#start(opts)
endfunction

function s:complete(...) abort
  return "ff\nff_vim_popup"
endfunction

command! -nargs=? -complete=custom,s:complete DduTerminalPreview
  \ call s:ddu_terminal_preview(<q-args>)
