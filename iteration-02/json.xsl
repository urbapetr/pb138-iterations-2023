<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="text" />
    <xsl:include href="user.xsl" />
    <xsl:include href="group.xsl" />
    <xsl:include href="event.xsl" />

    <xsl:template match="/">
        <users>
            <xsl:apply-templates select="social/users/user" />
        </users>
        <groups>
            <xsl:apply-templates select="social/groups/group" />
        </groups>
        <events>
                <xsl:apply-templates select="social/events/event" />
        </events>
    </xsl:template>
</xsl:stylesheet>