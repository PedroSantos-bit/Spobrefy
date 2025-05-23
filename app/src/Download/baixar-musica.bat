@echo off
REM Caminho para o yt-dlp e ffmpeg
SET YTDLP=yt-dlp.exe
SET FFMPEG=C:\Users\jonat\Projetos_web\Spobrefy-main\Spobrefy\app\src\Download\ffmpeg-7.1.1-essentials_build\bin

REM Caminho de destino para salvar o MP3
SET DESTINO=C:\Users\jonat\Projetos_web\Spobrefy-main\Spobrefy\app\src\Music

REM Link do vídeo (você pode trocar por qualquer outro link do YouTube)
SET VIDEO=https://www.youtube.com/watch?v=vIaH35-MLsk&list=RDEM0tf6YKVhAn0A5a_IK8F2rg&index=9

REM Executa o comando
%YTDLP% -x --audio-format mp3 --ffmpeg-location "%FFMPEG%" -o "%DESTINO%\%%(title)s.%%(ext)s" "%VIDEO%"

pause
