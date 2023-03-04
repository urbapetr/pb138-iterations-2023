<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" />
    <xsl:include href="user.xsl" />
    <xsl:include href="group.xsl" />
    <xsl:include href="event.xsl" />

    <xsl:template match="social">
        <xsl:text disable-output-escaping='yes'>&lt;!DOCTYPE html&gt;</xsl:text>
        <html>
            <head>
                <title>Iteration 02</title>
            </head>

            <body>
                <h1>Users:</h1>
                <xsl:apply-templates select="social/users/user" />

                <h1>Groups:</h1>
                <xsl:apply-templates select="social/groups/group" />

                <h1>Events:</h1>
                <xsl:apply-templates select="social/events/event" />
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>